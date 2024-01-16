<template>
    <div class="w-full">
        <div class="flex justify-center">
            <div class="size-10">
                <LogoTwitter />
            </div>
        </div>

        <div class="pt-5 space-y-6">

            <UIInput v-model="data.username" label="Username" placeholder="@username" />

            <UIInput label="Password" placeholder="********" type="password" v-model="data.password" />


            <UIButton @click="handleLogin" liquid :disabled="isButtonDisabled">
                Login
            </UIButton>

            <p class="text-xs text-gray-500 dark:text-white/40 ">Don't have an account yet? <span class="text-lg font-semibold hover:underline transition-all duration-300 cursor-pointer" @click="handleClick">Register</span></p>


        </div>
    </div>
</template>
<script setup>
const emits = defineEmits(['onChangePage'])

const data = reactive({
    username: '',
    password: '',
    loading: false
})

async function handleLogin() {
    const { login } = useAuth()

    data.loading = true
    try {
        await login({
            username: data.username,
            password: data.password
        })
    } catch (error) {
        console.log(error)
    } finally {
        data.loading = false
    }

}

function handleClick() {
    emits('onChangePage', true)
}
const isButtonDisabled = computed(() => {
    return (!data.username || !data.password) || data.loading
})

</script>