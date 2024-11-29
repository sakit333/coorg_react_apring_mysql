pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Use the name you configured in the tools
    }

    stages {
        stage('to now info about tools') {
            steps {
                echo 'Hello, world!'
                sh 'pwd'
                sh 'whoami'
            }
        }
        stage('Build React App') {
            steps {
                dir('frontend') {
                    echo 'Building React frontend using shell script...'
                    sh 'chmod +x build_frontend.sh'
                    sh './build_frontend.sh'
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}