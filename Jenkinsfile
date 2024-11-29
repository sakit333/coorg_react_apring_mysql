pipeline {
    agent any

    enivironments {

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
                    echo 'Building React frontend...'
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'npm i'
                }
            }
        }
    }
}