const error = {
    data(){
        return {
            text: ''
        }
    },
    methods: {
        setError(error){
           this.text = error
        }
    },
    template: `<div class="error-block" v-if="text">
                    <p class="error-msg">
                   
                    <button class="close-btn" @click="text = ''">&times;</button>
                    {{ text }}
                    </p>
                </div>`
};
export default error