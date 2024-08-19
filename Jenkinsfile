pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/saba-2002/nodeapp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Start the application using pm2
                sh 'pm2 start app.js --name "my-node-app"'
            }
        }
        stage('Verify Application') {
            steps {
                echo 'Verifying application...'
                sh 'curl http://3.109.182.109:3000'  // Adjust if necessary
            }
        }
    }
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
