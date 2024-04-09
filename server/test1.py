name = "Fernanda"
print(name)

def say_hello():
    print("Hello")
    print("I'm inside")


print("I'm outside")
#calls
say_hello()


# data structures -> 114

# array js -> list python
prices = [2, 5, 12, 67, 14]

# add
prices.append(9)

print(prices)

# sum all the prices
total = 0
for price in prices:
    total += price

print(total)


# dictionary
me = {
    "name": "Fernanda",
    "age": 20,
    "hobbies": ["swim", "dance", "code"],
    "addres": {
        "street": "Av. 1",
        "city": "Sidney",
        "number": 123
    }
}

print(me)

# read
print(me["name"])
print(me["addres"]["city"]) 

# warning: reading a key that doesn't exist
if "last" in me:
    print(me["last"])


# modify
me["age"] = 99

# add keys
me["last"] = "Ugalde"


print("THE END!!!")