'use client';

// Portfolio for Sri Ram Mamidi

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  const gradient = "bg-gradient-to-r from-sky-100 via-blue-200 to-indigo-100";
  const projects = [
    {
      title: "Feedforward Neural Network for Churn Prediction",
      desc: "Developed a Feedforward Neural Network in Python to predict customer churn with over 85% accuracy using Telco data. Implemented dropout, batch normalization, and hyperparameter tuning for optimized performance."
    },
    {
      title: "Sentiment Analysis for Restaurant Reviews",
      desc: "Performed sentiment analysis on restaurant reviews using logistic regression, SVM, LSTM, and CNN models. Preprocessing included tokenization, stopword removal, and lemmatization. Results visualized using word clouds and heatmaps."
    },
    {
      title: "LLM for Career Assistance",
      desc: "Utilized OpenAI LLM to analyze data science LinkedIn profiles, extract skill trends, simulate mock interviews, and generate resume feedback based on ATS best practices."
    },
    {
      title: "CIFAR-10 Image Classification",
      desc: "Created a deep learning model in TensorFlow/Keras to classify CIFAR-10 images into 10 categories. Evaluated with confusion matrices and recall scores. Application relevance explored for automotive image systems."
    },
    {
      title: "LLM-Aided Classification Guidance",
      desc: "Designed LLM prompts to extract statistical insights, identify correlated variables using Pearson coefficient, and suggest suitable ML/DL models (e.g., RF, XGBoost, ANN, Logistic Regression) for classification problems."
    },
    {
      title: "Investigating Morin Hydrate in PTSD",
      desc: "Executed preclinical research on Morin Hydrate's effects on PTSD using a validated stress-restress rat model. Assessed biochemical markers and behavioral outcomes to evaluate neuroprotection."
    }
  ];

  return (
    <div className={`p-6 max-w-5xl mx-auto text-gray-800 ${gradient} min-h-screen`}>
      {/* Name Card */}
      <div className="text-center my-10 bg-white/90 p-8 rounded-2xl shadow-md">
        <img
          src="/profile.jpg"
          alt="Sri Ram Mamidi"
          className="mx-auto rounded-full w-40 h-40 object-cover"
        />
        <h1 className="text-4xl font-bold mt-4">Sri Ram Mamidi</h1>
        <p className="text-lg mt-2">
          Data Analyst | Machine Learning | Power BI | Healthcare Analytics
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/sriram1229" target="_blank">
            <Button>GitHub</Button>
          </a>
          <a href="https://www.linkedin.com/in/sri-ram-mamidi" target="_blank">
            <Button variant="outline">LinkedIn</Button>
          </a>
          <a href="mailto:sriram.mamidi04@gmail.com">
            <Button variant="ghost">Email</Button>
          </a>
          <a href="https://www.credly.com/users/sri-ram-mamidi.3fa5ab72" target="_blank">
            <Button variant="ghost">Credly</Button>
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <div className="bg-white/90 p-6 rounded-xl shadow-md">
          <p className="text-base leading-relaxed">
            I’m Sri Ram Mamidi, a passionate Data Analyst with a strong background in healthcare data, clinical research, and machine learning. I recently completed my MS in Analytics at Saint Louis University, where I gained hands-on experience in predictive modeling, EHR data analysis, and business intelligence tools like Power BI. I thrive at the intersection of technology and health, aiming to develop data-driven solutions that empower decision-makers in healthcare and beyond.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4 bg-white rounded-xl shadow">
              <h3 className="text-lg font-semibold">Master of Science in Analytics</h3>
              <p className="text-sm text-muted-foreground">Saint Louis University | Aug 2023 – May 2025 | GPA: 3.97</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 bg-white rounded-xl shadow">
              <h3 className="text-lg font-semibold">Bachelor of Pharmacy</h3>
              <p className="text-sm text-muted-foreground">Jawaharlal Nehru Technological University | 2016 – 2020 | GPA: 3.0</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4 bg-white rounded-xl shadow">
              <h3 className="text-lg font-semibold">Research Analyst – Saint Louis University</h3>
              <p className="text-sm text-muted-foreground">Feb 2024 – May 2025</p>
              <p className="text-sm">Worked on research data analytics, healthcare policy analysis, and supported publication-driven projects with data visualization and predictive modeling.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 bg-white rounded-xl shadow">
              <h3 className="text-lg font-semibold">Clinical Data Analyst – Parexel International</h3>
              <p className="text-sm text-muted-foreground">Jan 2021 – July 2023</p>
              <p className="text-sm">Managed clinical trial datasets, performed QC checks, and ensured data accuracy and integrity aligned with regulatory standards and protocols.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Master's Research Projects */}
      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-6">Master's Research Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card>
              <CardContent className="p-4 bg-white rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2">Healthcare Analytics – Readmission Prediction</h3>
                <p className="text-sm text-muted-foreground">Built a predictive readmission risk model using Random Forests on EHR data. Integrated model outputs with Power BI dashboard to visualize hospital-level risk, filter by patient conditions, and monitor intervention performance.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <motion.div key={index} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardContent className="p-4 bg-white rounded-xl shadow">
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p className="text-sm text-muted-foreground">{proj.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4 bg-white rounded-xl shadow">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><a href="https://learn.microsoft.com/api/achievements/share/en-us/SriRamMamidi-8605/CNQV7Y29?sharingId=F2E0E72655BEE9DE" target="_blank" className="text-blue-700 underline">Microsoft Certified: Power BI Data Analyst Associate</a></li>
                <li><a href="https://learn.microsoft.com/api/achievements/share/en-us/SriRamMamidi-8605/F2TDEMSX?sharingId=F2E0E72655BEE9DE" target="_blank" className="text-blue-700 underline">AI-900: Microsoft Azure AI Fundamentals</a></li>
                <li><a href="https://learn.microsoft.com/api/achievements/share/en-us/SriRamMamidi-8605/Z4CLMXF2?sharingId=F2E0E72655BEE9DE" target="_blank" className="text-blue-700 underline">DP-900: Microsoft Azure Data Fundamentals</a></li>
                <li><a href="https://learn.microsoft.com/api/achievements/share/en-us/SriRamMamidi-8605/NZBULTZF?sharingId=F2E0E72655BEE9DE" target="_blank" className="text-blue-700 underline">SC-900: Microsoft Security, Compliance, and Identity Fundamentals</a></li>
                <li><a href="https://learn.microsoft.com/api/achievements/share/en-us/SriRamMamidi-8605/W7KC878N?sharingId=F2E0E72655BEE9DE" target="_blank" className="text-blue-700 underline">Cloud Skills Challenge: AI Skills and Data Challenge Completion</a></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Resume Section */}
      <div className="my-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a href="/SRI RAM MAMIDI-Data_Analyst.docx" download>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Download Resume</Button>
        </a>
      </div>
    </div>
  );
}
