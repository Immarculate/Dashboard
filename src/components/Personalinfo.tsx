<table className='flex w-[62.4rem] justify-between border-b h-12 items-center' >
  <tr>
    <th>
      <h2 className='text-[12px]'>ORGANIZATION</h2>
      <img src='/assets/filter.svg' alt='filter' />
    </th>
    <th>
      <h2 className='text-[12px]'>USERNAME</h2>
      <img src='/assets/filter.svg' alt='filter' />
    </th>
    <th>
      <h2 className='text-[12px]'>EMAIL</h2>
      <img src='/assets/filter.svg' alt='filter' />
    </th>
    <th>
     <h2 className='text-[12px] '>PHONE NUMBER</h2>
     <img src='/assets/filter.svg' alt='filter' />
    </th>
    <th>
      <h2 className='text-[12px]'>DATE JOINED</h2>
      <img src='/assets/filter.svg' alt='filter' />
    </th>
    <th>
      <h2 className='text-[12px]'>STATUS</h2>
      <img src='/assets/filter.svg' alt='filter' />
    </th>
  </tr>
  {users.map((user) => (
  <tr key={user.id}>
    <td>{user.organization}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>{user.dateJoined}</td>
    <td>{user.statusCode}</td>
    <img src='/assets/3dot.png' alt='toggle' className='mr-3' onClick={() => toggleDot(user.id)} />
  </tr>
  ))}
    
</table>