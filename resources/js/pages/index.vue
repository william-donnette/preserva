<script>
import CallToAction from '../components/CallToAction.vue';
import Content from '../components/Content.vue';
import Features from '../components/Features.vue';
import TitleComponent from '../components/TitleComponent.vue';

export default {
	components : {
		CallToAction, Content, Features, TitleComponent
	},
}
</script>

<template>
	<TitleComponent />
	<Content />
	<Features />
	<CallToAction />
</template>
