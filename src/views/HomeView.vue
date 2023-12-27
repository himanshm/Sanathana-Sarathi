<script setup lang="ts">
import HomeContent from '@/components/HomeContent.vue'
import SubscriptionStatusForm from '@/components/SubscriptionStatusForm.vue'
</script>

<template>
  <div class="home-wrapper">
    <HomeContent
      main-heading="The Mission"
      sub-heading="Devoted to the Moral and Spiritual Uplift of Humanity through"
      human-values="SATHYA DHARMA SANTHI PREMA AHIMSA"
      quote-intro="During the occasion of the launch of Sanathana Sarathi on Feb 16, Maha Sivarathri, 1958, Bhagawan declared:"
      swami-said="From this day, our Sanathana Sarathi will lead to victory the cohorts of Truth - the Vedas, the Sastras and similar scriptures of all faiths, against the forces of the ego such as injustice, falsehood, immorality and cruelty. This is the reason why it has emerged. This Sarathi will fight in order to establish world prosperity. It is bound to sound the paean of triumph when universal Ananda is achieved."
    />
    <div>
      <SubscriptionStatusForm />
    </div>
  </div>
</template>


