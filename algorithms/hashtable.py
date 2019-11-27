# demonstrate hashtable usage


# create a hashtable all at once
animals = dict({"cat": "meow", "dog": "woof", "bird": "chirp-chirp"})
print(animals)

# create a hashtable progressively
cancion = {}
cancion["chicken"] = "pollito"
cancion["hen"] = "gallina"
cancion["pencil"] = "lapiz"
cancion["pen"] = "pluma"
print(cancion)

#  try to access a nonexistent key
# cancion["piso"] 



# replace an item
cancion["chicken"] = "pollo"
print(cancion)

#  iterate the keys and values in the dictionary
for key, value in cancion.items():
    print("key: ", key, " value: ", value)
