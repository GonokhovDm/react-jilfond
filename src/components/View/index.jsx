import React from 'react';

import './View.scss';

import photoSvg from '../../svg/photo.svg';

function View( {activeUser} ) {
  console.log(activeUser)
  return (
    <div className="view">
      {activeUser ? 
        <div className="view__user">
          <div className="view__photo">
            <img src={photoSvg} alt="" />
          </div>
          <div className="view__userinfo">
            <h2 className='view__userinfo-name'>{activeUser.name}</h2>
            <p><span>email: </span>{activeUser.email}</p>
            <p><span>phone: </span>{activeUser.phone}</p>
            <h2 className='view__userinfo-about'>О себе:</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nemo labore tempore voluptatum reiciendis minus dignissimos tenetur modi quaerat iste, tempora quidem eaque beatae, incidunt impedit dolores. Veniam suscipit sapiente explicabo facilis? Dolores aliquam beatae voluptate est doloribus. Exercitationem aperiam similique culpa, quae eius ipsa quia saepe dicta modi doloribus animi totam, quasi voluptates temporibus voluptatibus facilis. Quo corporis magni totam, dolorem laudantium atque, debitis recusandae cupiditate quia rerum eaque.</p>
          </div>
        </div>
        : <span>Выберите сотрудника, чтобы посмотреть его профиль</span>
      }
    </div>
  )
}

export default View
