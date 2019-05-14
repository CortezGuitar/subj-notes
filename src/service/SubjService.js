// import axios from 'axios';

export default class SubjService {
  data = [
    {
      id: '1',
      title: 'Note Title One',
      content: 'Note Content'
    },
    {
      id: '2',
      title: 'Note Title Two',
      content: 'Note Content'
    },
    {
      id: '3',
      title: 'Note Title Three',
      content: 'Note Content'
    },
    {
      id: '4',
      title: 'Note Title Four',
      content: 'Note Content'
    }
  ];

  getNotes = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  };
}
