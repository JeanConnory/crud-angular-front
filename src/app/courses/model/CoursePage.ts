import { Course } from "./course";
import { Lesson } from "./lesson";

export interface CoursePage {
  items: Course[];
  pageIndex: number;
  totalPages: number;
  totalElements: number;
}
