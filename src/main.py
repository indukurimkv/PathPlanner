import pygame as pg
import Input
from Calibrate import Calibrate

def setBackgroud(path, screen, scaleFactor):
    image = pg.image.load(path)
    width, height = image.get_size()
    print(width, height)
    width = width // scaleFactor
    height = height // scaleFactor
    image = pg.transform.scale(image, (width, height))

    screen = pg.display.set_mode(image.get_size())
    screen.blit(image, (0,0))

    Calibrate.imWidth, Calibrate.imHeight = width, height



def main():
    pg.init()
    screen = pg.display.set_mode((500,500))
    setBackgroud("src/2023LayoutMarkingDiagramCropped.png", screen, 2.5)


    while Input.update():
        pg.display.update()
    pg.quit()

if __name__ == "__main__":
    main()