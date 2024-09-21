import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CourseManagement from "../components/CourseManagement";
import CertificateIssuance from "../components/CertificateIssuance";
import LearnerAssessment from "../components/LearnerAssessment";
import InteractionWithLearners from "../components/InteractionWithLearners";
import TokenIncentives from "../components/TokenIncentives";
import ProfileManagement from "../components/ProfileManagement";

const EducatorDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="course-management" />} />
            <Route path="course-management" element={<CourseManagement />} />
            <Route
              path="certificate-issuance" element={<CertificateIssuance />}
            />
            <Route path="learner-assessment" element={<LearnerAssessment />} />
            <Route path="interaction" element={<InteractionWithLearners />} />
            <Route path="token-incentives" element={<TokenIncentives />} />
            <Route path="profile-management" element={<ProfileManagement />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default EducatorDashboard;
