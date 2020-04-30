const dataMock = [
  {
    id: '1',
    firstname: 'Paweł',
    lastname: 'Bujna',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/18085193?s=460&v=4',
    email: 'pawelbujna@gmail.com',
    phone: '792225950',
    hasPremium: true,
    bids: [
      {
        id: '1',
        carTitle: 'BidTitle',
        amount: 5,
        created: 'test'
      }
    ]
  },
  {
    id: '2',
    firstname: 'Paweł',
    lastname: 'Bujna',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/18085193?s=460&v=4',
    email: 'pawelbujna@gmail.com',
    phone: '792225950',
    hasPremium: true,
    bids: []
  },
  {
    id: '3',
    firstname: 'Paweł',
    lastname: 'Bujna',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/18085193?s=460&v=4',
    email: 'pawelbujna@gmail.com',
    phone: '792225950',
    hasPremium: true,
    bids: []
  },
  {
    id: '4',
    firstname: 'Paweł',
    lastname: 'Bujna',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/18085193?s=460&v=4',
    email: 'pawelbujna@gmail.com',
    phone: '792225950',
    hasPremium: true,
    bids: []
  },
  {
    id: '5',
    firstname: 'Paweł',
    lastname: 'Bujna',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/18085193?s=460&v=4',
    email: 'pawelbujna@gmail.com',
    phone: '792225950',
    hasPremium: true,
    bids: []
  }
]

const mockPromise = data => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

const get = (pageNumber = 1, usersPerPage = 2) => {
  const lastItemIndex = pageNumber * usersPerPage;
  const firstItemIndex = lastItemIndex - usersPerPage;

  return mockPromise({
    data: dataMock.slice(firstItemIndex, lastItemIndex),
    pagesAmount: Math.ceil(dataMock.length / usersPerPage)
  })
}

// Small refactor. Updating elements by product.id
const save = (product) =>
  product.id !== undefined ? (dataMock[product.id] = product) : dataMock.push(product)

const UsersService = {
  get,
  save
};

export default UsersService;
