import random

print("🎯 Welcome to the Number Guessing Game!")
number = random.randint(1, 100)
attempts = 0

while True:
    guess = int(input("Enter your guess (1 to 100): "))
    attempts += 1

    if guess < number:
        print("Too low! Try again.")
    elif guess > number:
        print("Too high! Try again.")
    else:
        print(f"🎉 Correct! You guessed it in {attempts} attempts.")
        break
