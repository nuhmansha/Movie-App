import * as Yup from 'yup'

export const AddMovieSchema = Yup.object().shape({
    title:Yup.string().required('Title is required'),
    cast: Yup.string().required('Cast is required'),
    image: Yup.mixed()
      .required('Image is required')
      .test(
        'fileSize',
        'File size is too large',
        value => value && value.size <= 2000000
      )
      .test(
        'fileType',
        'Invalid file type',
        value => value && ['image/jpeg', 'image/png'].includes(value.type)
      ),
  });