export interface CourseDetailType {
  course: string;
  imageSrc: string;
  profession: string;
  price: string;
  category:
    | 'mobiledevelopment'
    | 'webdevelopment'
    | 'datascience'
    | 'cloudcomputing';
}
