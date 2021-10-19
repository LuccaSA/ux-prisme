import hudson.Util;

properties([
	disableConcurrentBuilds(),
])

node {

	def projectTechnicalName = 'ux-prisme'
	def repoName = "ux-prisme"
	def publishDirectoryName = "${projectTechnicalName}-publish"

	
	def isPr = false
	def isMaster = false
	def isRc = false

	if(env.BRANCH_NAME == "master") {
		isMaster = true
	}
	if(env.BRANCH_NAME == "rc") {
		isRc = true
	}
	if(env.BRANCH_NAME ==~ /^PR-\d*/) {
		isPr = true
	}

	def isResultSuccessful = true
	try {
		timeout(time: 15, unit: 'MINUTES') {
			stage('Notify') {
				parallel(
					env: {
						echo "project ${projectTechnicalName}"
						echo "branch ${env.BRANCH_NAME}"
						echo "slave ${env.NODE_NAME}"
					},
					failFast: true,
				)
			}


			def scmVars = null

			stage('Cleanup') {
				parallel (
					tools: {
						if(fileExists('.jenkins')) {
							dir('.jenkins') {
								deleteDir()
							}
						}
					},
					publish: {
						if(fileExists(publishDirectoryName)) {
							dir(publishDirectoryName) {
								deleteDir()
							}
						}
					},
					failFast: true,
				)
			}

			stage('Prepare') {
				scmVars = checkout scm
			}

			stage('Restore') {
				parallel (
					prisme: {
						bat "npm ci"
					},
					failFast: true,
				)
			}
			stage('Qualif') {
				parallel (
					prisme: {
						// stage('build') {
						// 	bat "npm run ..."
						// }
						// stage('test') {
						// 	bat "npm run test"
						// }
						// stage('lint') {
						// 	bat "npm run lint"
						// }
					},
					failFast: true,
				)
			}
			stage('Publish') {
				parallel(
					prisme: {
						bat "npm run build -- --outputPath .\\${publishDirectoryName}"
					},
					failFast: true,
				)
			}
			if (isRc || isMaster) {
				stage('Deploy') {
					parallel(
						prisme: {
							// continuous deploy of branch rc and master
							if (isRc) {
								echo "deploying prisme-rc"
								bat "npx cpy --parents --cwd ${publishDirectoryName} ** \\\\labs2.lucca.local\\c\$\\d\\sites\\prisme-rc"
							}
							if (isMaster) {
								echo "deploying prisme"
								bat "npx cpy --parents --cwd ${publishDirectoryName} ** \\\\labs2.lucca.local\\c\$\\d\\sites\\prisme"
							}
						},
						failFast: true
					)
				}
			}
		}
	} catch(err) {
		stage('Error') {
			println err
		}
		isResultSuccessful = false
		currentBuild.result = 'failure'
	} finally {
		def color = "good"
		def endMessage = "Succès"

		if(!isResultSuccessful) {
			color = "danger"
			endMessage = "Erreur"
		}
		// stage('Notify') {
		// 	parallel(
		// 		github: {

		// 		},
		// 		failFast: true,
		// 	)
		// }
	}
}
