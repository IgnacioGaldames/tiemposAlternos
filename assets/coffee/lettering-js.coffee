# Grab a loading screen lock
lsLockLettering = LoadScreen.lock()
# Import a script while using the returned Promise to ensure that
# the script has been fully loaded before executing dependent code
cloudflare = "https://cdnjs.cloudflare.com/ajax/libs/"
letteringJs = [
  cloudflare + "lettering.js/0.7.0/jquery.lettering.min.js"
  ]
importScripts(letteringJs).then(->
  # Code that depends on the script goes here.
  LoadScreen.unlock lsLockLettering
  $(".lettering").lettering()
  if env == 'staging'
    console.log 'letteringJs cargado'
  return
).catch (err) ->
  # There was an error loading the script, log it to the console.
  console.log err
  return