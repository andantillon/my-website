<template>
    <div class="bg-white px-10 py-10 w-1/8 flex flex-col justify-center shadow-xl rounded-xl space-y-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:skew-x-1">
            <div class="my-1">
                <svg class="mx-auto w-8 h-8" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                    <path :d="svg_path"/>
                </svg>
            </div>

            <div class="text-center space-y-10">
                <p class="text-xl text-semibold font-semibold">
                    {{ platform }}
                </p>
                <button :class="[border_color, text_color, hover_bg, hover_text]" class="px-4 py-2 text-lg rounded-full border
                transform-gpu transition ease-in duration-300 hover:scale-110 hover:border-white"> <a target="_blank" :href="link"> {{ username }} </a> </button>
            </div>
        </div>
</template>

<script>
export default {
    props: [
        'platform',
        'svg_path',
        'username',
        'link',
        'border_color',
        'text_color',
        'hover_bg',
        'hover_text'
    ]
}
</script>