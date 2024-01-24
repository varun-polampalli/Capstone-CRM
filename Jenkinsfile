Backend :
----------------
  pipeline {
agent any
stages {
stage ("git clone") {
steps {
git 'https://github.com/varun-polampalli/Capstone-CRM.git'
}
}

// stage ("unzip") {
//     steps {
//         sh "unzip /var/lib/jenkins/workspace/capstone/CRM-Backend.zip"
//         sh "unzip /var/lib/jenkins/workspace/capstone/CRM-Frontend.zip"
//     }
// }

stage ("maven build") {
steps {

sh 'mvn clean install'
}
}
stage ("project deployment") {
steps {
sh 'java -jar /var/lib/jenkins/workspace/capstone/target/*.jar & '
}
}
}
}

Frontend :
----------------
  pipeline {
    agent any

    stages {
        stage("git clone") {
            steps {
                // Clone the code from the 'frontend' branch
                git branch: 'frontend', url: 'https://github.com/varun-polampalli/Capstone-CRM.git'
            }
        }

        // stage ("unzip") {
        //     steps {
        //         sh "unzip /var/lib/jenkins/workspace/capstone/CRM-Backend.zip"
        //         sh "unzip /var/lib/jenkins/workspace/capstone/CRM-Frontend.zip"
        //     }
        // }

        stage("npm") {
            steps {
                //sh 'npm install'
                sh 'npm install'
                sh 'npm start '
            }
        }
    }
}
