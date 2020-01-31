#Save API
Config.saves.autoload = "prompt"
Config.saves.autosave = ["bookmark", "autosave"]
Config.saves.id = "a-big-huge-story-part-1"
Config.saves.slots = 1
Config.saves.version = 1

if Save.slots.has(0)
    State.variables.slotA = true
else
    State.variables.slotA = false