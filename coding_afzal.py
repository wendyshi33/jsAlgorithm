import json

class NearestNeighbour:
    def __init__(self):
        self.points = []
        with open('coordinates.json') as data_file:
            data = json.load(data_file)

        for p in data:
            coord = [int(x.strip()) for x in p['value'].split(',')]
            self.points.append([p['id'], coord[0], coord[1]])

    def get_ordered_list(self, x, y):
        self.points.sort(key = lambda p: (p[1] - x) ** 2 + (p[2] - y) ** 2)
        return self.points

nn = NearestNeighbour()

//test cases
print nn.get_ordered_list(6, 33)
print nn.get_ordered_list(84, 100)
print nn.get_ordered_list(31, 49)
print nn.get_ordered_list(0, 0)
