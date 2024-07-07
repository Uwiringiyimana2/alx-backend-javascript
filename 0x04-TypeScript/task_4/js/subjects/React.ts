namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      if (this.teacher && this.teacher.experienceTeachingC > 0) {
        return 'Available Teacher: ' + this.teacher.firstName;
      } else {
        return 'No available teacher';
      }
    }
  }
}
