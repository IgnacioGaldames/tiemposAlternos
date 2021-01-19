#env = 'production'
env = 'staging'
version = '1.1'

setStaging = ->
	State.variables.env = env
	State.variables.version = version
	console.log env + ' ' + version
setStaging()