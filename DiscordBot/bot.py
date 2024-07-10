import discord
from discord.ext import commands
import subprocess

# Create an instance of Intents and enable the ones you need
intents = discord.Intents.default()
intents.message_content = True  # Enable reading message content

# Initialize the bot with a command prefix and the required intents
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')

@bot.command()
async def runscript(ctx):
    try:
        # Use the full path to the Python interpreter
        python_path = '/usr/bin/python3'  # Replace this with the actual path to your Python interpreter
        result = subprocess.run([python_path, 'MainCompiler.py'], capture_output=True, text=True)
        await ctx.send(f'Script output:\n{result.stdout}')
    except Exception as e:
        await ctx.send(f'An error occurred: {str(e)}')

bot.run('MTI2MDYzMDk3ODA0MTIxNzA3NQ.Gat80E.AvN1tW4F-PRkmYdvgF-L_YUcQRYLuOpwBnskH4')
