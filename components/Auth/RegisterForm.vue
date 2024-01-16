<template>
    <div class="w-full">
        <div class="flex justify-center">
            <div class="size-10">
                <LogoTwitter />
            </div>
        </div>

        <div class="pt-5 space-y-4">

            <UIInput v-model="data.name" label="Full Name" placeholder="your full name" />
            <UIInput v-model="data.username" label="Username" placeholder="@username" />
            <UIInput v-model="data.email" label="Email" placeholder="email@email.com" />

            <UIInput label="Password" placeholder="********" type="password" v-model="data.password" />
            <UIInput label="Confirm Password" placeholder="********" type="password" v-model="data.repeatPassword" />


            <UIButton @click="handleRegister" liquid :disabled="isButtonDisabled">
                Register
            </UIButton>

            <p class="text-xs text-gray-500 dark:text-white/40 ">Already have an account? <span class="text-lg font-semibold hover:underline transition-all duration-300 cursor-pointer" @click="handleClick">Login</span></p>


        </div>
    </div>
</template>
<script setup>

const emits = defineEmits(['onChangePage'])

const data = reactive({
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    loading: false
})

async function handleRegister() {
    const { register } = useAuth()

    data.loading = true
    try {
        await register({
            username: data.username,
            password: data.password,
            email: data.email,
            repeatPassword: data.repeatPassword,
            name: data.name
        })

        emits('onChangePage', false)
    } catch (error) {
        console.log(error)
    } finally {
        data.loading = false
    }

}

function handleClick() {
    emits('onChangePage', false)
}
const isButtonDisabled = computed(() => {
    return (!data.username || !data.password) || data.loading
})

</script>