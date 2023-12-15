import students from '../data/students.ts'
import Student from '../models/student.ts'

/**
 * Retrieve an array of all the known students.
 *
 * @return All students in the database.
 */
export const getAllStudents = (): Student[] => {
    return students.map(s => ({...s}))
}

/**
 * Retrieve a specific student by its id.
 *
 * @param id The id of the student that should be retrieved.
 * @return The retrieved student or undefined if no student could be found with the given id.
 */
export const getStudentById = (id: number): Student | undefined => {
    // Onderstaand statement is gelijk aan this.students.filter((s) => s.id === id)[0]
    // met het verschil dat je hier geen IndexOutOfBounds exception kan krijgen.
    // Als er geen overeenkomst gevonden is, wordt undefined teruggegeven.
    return students.find((s) => s.id === id)
}
