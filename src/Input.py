import pygame as pg
from Calibrate import Calibrate

def update():
    events = pg.event.get()
    for event in events:
        if event.type == pg.QUIT:
                return False
        if event.type == pg.KEYDOWN:
            checkKeyDown()
            return True
        if event.type == pg.MOUSEBUTTONDOWN:
            checkKeyDown()
            return True





    
    return True

def checkKeyDown():
    keys = pg.key.get_pressed()
    if keys[pg.K_LALT] and keys[pg.K_LCTRL] and keys[pg.K_c]:
        Calibrate.addPoints(getMousePos())
    if pg.mouse.get_pressed()[0]:
        print(Calibrate.actualCoord(getMousePos()))
    if keys[pg.K_LALT] and keys[pg.K_LCTRL] and keys[pg.K_o]:
        Calibrate.setOrigin(getMousePos())

getMousePos = lambda: pg.mouse.get_pos()


        