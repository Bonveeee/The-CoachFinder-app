<template>
    <q-page>
      <q-container class="q-py-xl">
        <q-card class="q-pa-md q-mb-md" v-for="testimonial in testimonials" :key="testimonial.id">
          <q-card-section>
            <q-avatar size="2rem" :src="testimonial.avatar"></q-avatar>
            <div class="q-ml-sm">
              <div class="text-h6">{{ testimonial.name }}</div>
              <div class="text-body2">{{ testimonial.position }}</div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-py-md">
            <div class="text-h5">{{ testimonial.message }}</div>
          </q-card-section>
        </q-card>
      </q-container>
    </q-page>
  </template>
  <script>
  export default {
    name: "TestimonialsView",
    data() {
      return {
        testimonials: [
          {
            id: 1,
            name: "John Smith",
            position: "CEO, ABC Inc.",
            avatar: "https://cdn.quasar.dev/img/avatar2.jpg",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus tincidunt mauris, sed ultrices velit ullamcorper at. Donec euismod, quam eget ultricies rhoncus, ante arcu venenatis ipsum, a sagittis turpis augue vel libero. "
          },
          {
            id: 2,
            name: "Jane Doe",
            position: "Marketing Director, XYZ Corp.",
            avatar: "https://cdn.quasar.dev/img/avatar3.jpg",
            message: "Suspendisse potenti. Nunc sit amet hendrerit mi. Duis fringilla posuere nisi, ac laoreet ipsum congue id. Suspendisse malesuada posuere tellus, nec ultricies nunc. Nam maximus, elit eu varius fermentum, erat justo lacinia metus, non vehicula leo sem non nulla. "
          }
        ]
      };
    }
  };
  </script>