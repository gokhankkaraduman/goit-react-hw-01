import style from './Friend.module.css';
function FriendsList ({friendName, imgUrl, isOnline}) {
    return (
        <div className={style.container}>
            <div className={style.imgWrapper}>
                <img className={style.img} src={imgUrl} alt="friend Avatar" />
            </div>
            <p className={style.friendText}>{friendName}</p>
            {isOnline 
                ? ( <p className={`${style.isOnline} ${style.text}`}>Online</p>)
                : (<p className={`${style.isOffline} ${style.text}`}>Offline</p>)}
        </div>
    )
}
export default FriendsList;