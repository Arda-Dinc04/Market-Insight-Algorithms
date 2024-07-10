import discord
from discord.ext import commands
import subprocess
import pandas as pd
import os

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
        script_path = 'MainCompiler.py'
        
        if not os.path.exists(python_path):
            await ctx.send(f'Python interpreter not found at {python_path}')
            return
        
        if not os.path.exists(script_path):
            await ctx.send(f'Script not found at {script_path}')
            return

        result = subprocess.run([python_path, script_path], capture_output=True, text=True)
        
        if result.returncode != 0:
            await ctx.send(f'Script error:\n{result.stderr}')
            return
        
        # Load the resulting CSV file
        csv_path = '/Users/ardadinc/Desktop/Market-Insight/DiscordBot/RevSplitBotVersion/AlphaPRIABot/Results.csv'
        if not os.path.exists(csv_path):
            await ctx.send(f'CSV file not found at {csv_path}')
            return

        df = pd.read_csv(csv_path)
        
        # Drop the "Decision" column
        if 'Decision' in df.columns:
            df = df.drop(columns=['Decision'])
        
        # Format the DataFrame as a string
        formatted_output = df.to_string(index=False)
        
        # Send the formatted output to Discord
        await ctx.send(f'Script output:\n```\n{formatted_output}\n```')
    except Exception as e:
        await ctx.send(f'An unexpected error occurred: {str(e)}')

bot.run('MTI2MDYzMDk3ODA0MTIxNzA3NQ.Gat80E.AvN1tW4F-PRkmYdvgF-L_YUcQRYLuOpwBnskH4')
