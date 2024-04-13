import React from 'react'

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h2>{course.courseName}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="ou">Organization Unit:</label>
          <input type="text" id="ou" name="ou" value={course.ou} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="trainingType">Training Type:</label>
          <input type="text" id="trainingType" name="trainingType" value={course.trainingType} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input type="text" id="startDate" name="startDate" value={course.startDate} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input type="text" id="endDate" name="endDate" value={course.endDate} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="batchCount">Batch Count:</label>
          <input type="text" id="batchCount" name="batchCount" value={course.batchCount} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="trainerName">Trainer Name:</label>
          <input type="text" id="trainerName" name="trainerName" value={course.trainerName} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" name="status" value={course.status} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="finalFeedback">Final Feedback:</label>
          <textarea id="finalFeedback" name="finalFeedback" value={course.finalFeedback} readOnly></textarea>
        </div>
      </form>
    </div>
  )
}

export default CourseCard