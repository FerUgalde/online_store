def colors():
    all_colors= ["white", "red", "blue", "white", "purple", "red", "black", "white", "black"]

    # 1st - print every color
    # 2nd -  count how many time we have "white"
    count = 0
    for color in all_colors:
        print(color)

        if color == "white" or color == "black":
            count += 1

    print("The result is " + str(count))


# and or not


# fn calls
colors()

