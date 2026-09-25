import React  from "react";
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Heart, HeartOff} from 'lucide-react'
import {cn} from '@/lib/utils.js'

import {AnimatePresence, motion} from 'motion/react'
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function MovieCard({
    id,title,year,clasification,poster, duration, onFavorite
    
}
){
    const [like, setLike] = React.useState(false)
    return (
    <Card className="relative mx-auto w-full max-w-3xs pt-0 group">
      <div className="absolute inset-0 z-30 aspect-square group-hover:bg-black/15 transparent" />
      <img
      
        src={poster}
        alt={'Poster de ${title}'}
        onError={e => e.target.src = 'https://avatar.vercel.sh/shadcn1'}
        className="relative z-20 aspect-square w-full object-cover brightness-60  dark:brightness-40"
      />
      <button
        type="button"
        aria-label="Like this post"
        onClick={() => {
            setLike(l => !l)
            like?null:onFavorite(id)
         }
        }

        className={cn(
          "absolute z-30 right-1 top-1",
          "inline-flex h-10 w-10 items-center justify-center",
          "rounded-full border border-border",
          "text-foreground press",
          "transition-colors duration-300",
          like ? "bg-pink-400" : "bg-card"
        )}
        >
        <AnimatePresence mode="wait">
                {like ? (
        <motion.div
                    key="liked"
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 30 }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                    }}
        >
        <HeartOff
            className="h-4 w-4"
            color="white"
            fill="white"
        />
        </motion.div>
                ) : (
            <motion.div
                key="unliked"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
            <Heart className="h-4 w-4" />
            </motion.div>
        )}
        </AnimatePresence>
        </button>


      <CardHeader>
        <CardAction>
          {clasification?<Badge variant={clasification == 'N'?'destructive':'secondary'}>{clasification}</Badge>:null}
        </CardAction>
        <CardTitle>{title || 'Marianito 3'}</CardTitle>
        <CardDescription className="flex justify-between col-span-full">
          <span>{duration || 0}min.</span>
          <span>{year || 2000}</span>
        </CardDescription>
      </CardHeader>
      {/* <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter> */}
    </Card>
  )
}

export default MovieCard