import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import styles from './style.module.scss';

interface SubscribeButtonProps{
  priceId:string;
}

export function SubscribeButton({priceId}:SubscribeButtonProps){
  const {data: session} = useSession()

  function handleSubscribe(){
    if(!session){
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data
    }
  }

  return (
    <button type="button" className={styles.subscribeButton}>

      Subscribe now
    </button>
  )
}
