import pygame as pg


class Calibrate:
    points = []
    scaleFactor = 0
    offset = (0,0)
    imWidth, imHeight = 0, 0

    @classmethod
    def addPoints(cls, mousePos):
        if len(cls.points) < 2:
            cls.points.append(mousePos)
        if len(cls.points) == 2:
            cls.getScaleFactor()
            cls.points.clear()
    
    @classmethod
    def getScaleFactor(cls):
        if not len(cls.points) == 2:
            raise ValueError(f"Array {cls}.points is of length {len(cls.points)} and not 2")
        p1, p2 = cls.points
        distance = ((p2[0]-p1[0])**2 + (p2[1]-p1[1])**2)**.5
        print(distance)
        if distance == 0:
            print("Select different points")
            return
        actualDist = float(input("What is the physical distance between the points? "))
        scaleFactor = actualDist/distance
        cls.scaleFactor = scaleFactor

        print("calculations good.", f"Scale is {scaleFactor}")
        print(
            (p1[0] * scaleFactor, p1[1] * scaleFactor),
            (p2[0] * scaleFactor, p2[1] * scaleFactor))

    @classmethod
    def actualCoord(cls, pixel):
        return round((pixel[0] - cls.offset[0]) * cls.scaleFactor, 5), round((pixel[1] - cls.offset[1]) * cls.scaleFactor, 5)

    @classmethod
    def setOrigin(cls, mousePos):
        cls.offset = mousePos

        