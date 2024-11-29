pipeline {
    agent any

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
                echo 'Building React frontend using shell script...'
                sh 'chmod +x build_frontend.sh'
                sh './build_frontend.sh'
            }
        }
    }
}