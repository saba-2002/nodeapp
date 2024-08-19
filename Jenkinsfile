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
                // Copy the application files to the target server
                sshagent(['ec2-key']) {
                    sh """
                       scp -r ./* ubuntu@3.109.182.109:/home/ubuntu/my-node-app
                       ssh ubuntu@3.109.182.109 'cd /home/ubuntu/my-node-app && node app.js &'
                    """
                }
            }
        }
        stage('Verify Application') {
            steps {
                echo 'Verifying application...'
                // Verify the application by sending a request to the target server
                sh 'curl http://3.109.182.109:3000'
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
