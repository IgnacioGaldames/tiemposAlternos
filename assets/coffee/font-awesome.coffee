# Grab a loading screen lock
lsLockFontAwesome = LoadScreen.lock()
# Import a script while using the returned Promise to ensure that
# the script has been fully loaded before executing dependent code
importScripts('https://kit.fontawesome.com/64318bc47a.js').then(->
  # Code that depends on the script goes here.
  LoadScreen.unlock lsLockFontAwesome
  if env == 'staging'
    console.log 'Font Awesome cargado'
  return
).catch (err) ->
  # There was an error loading the script, log it to the console.
  console.log err
  return