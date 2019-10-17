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

				parallel (
					node: {
						env.NODEJS_HOME = "${tool 'Node LTS v10.13.x'}"
						env.PATH="${env.NODEJS_HOME};${env.PATH}"
						bat "node --version"
						bat "npm --version"
					},
					checkout: {
						scmVars = checkout scm
					},
					failFast: true,
				)
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
						stage('publish') {
							bat "npm run build -- --outputPath .\\${publishDirectoryName}"
						}
					},
					failFast: true,
				)
			}
			stage('Archive') {
				parallel(
					prisme: {
						zip archive:true, dir: "${publishDirectoryName}\\", glob: '**/*', zipFile: ".jenkins/zips/${projectTechnicalName}.zip"
					},
					failFast: true,
				)
			}
			stage('Deploy') {
				parallel(
					rc: {
						// continuous deploy of branch rc
						if (isRc) {
							// @gmouron
							// deployer le contenu du zip dans le dossier
							// C:\d\sites\prisme-rc
							// sur le server labs2.lucca.local
							// pas besoin de sous-dossier, faut que le dossier /prisme-rc contienne la derniere version buildee de la branche rc
							// si tu veux pas passer par le zip tu peux directement deployer le contenu du dosser .\\${publishDirectoryName}
							// tu peux faire un cleanup avant si tu veux, c'est pas necessaire dans un premier temps mais a un momne tfaudra le faire
						}
					},
					failFast: true
				)
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
		stage('Notify') {
			parallel(
				github: {

				},
				failFast: true,
			)
		}
	}
}
