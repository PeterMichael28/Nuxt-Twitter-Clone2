<template>
    <div>
        <MainSection title="Tweet" :loading="loading">

            <Head>
                <Title></Title>
            </Head>


            <TweetDetails :user="user" :tweet="tweet" />

        </MainSection>
    </div>
</template>
<script setup>

const loading = ref(false)
const tweet = ref(null)
const { getTweetById } = useTweets()
const { useAuthUser } = useAuth()
const user = useAuthUser()
const route = useRouter()
const id = route.params.id
watch(() => route.fullPath, () => getTweet())

console.log('res',  route.params.id)
// function getTweetIdFromRoute() {
//     return route.params.id
// }

async function getTweet() {
    loading.value = true
    try {
        const response = await getTweetById(id)

        tweet.value = response.tweet
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false
    }
}

onBeforeMount(() => {
    getTweet()
})

</script>