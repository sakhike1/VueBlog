<template>
  <div class="pagination-wrapper my-20">
    <nav aria-label="Page navigation example">
      <ul class="list-style-none flex">
        <li>
          <a class="pagination1 text-surface focus:text-primary-700 active:text-primary-700 dark:active:text-primary-500
           " href="#" @click.prevent="changePage(currentPage - 1)"
            :class="{ 'cursor-not-allowed opacity-50': currentPage === 1 }">Previous</a>
        </li>
        <li v-for="page in totalPages" :key="page">
          <a class="pagination2 text-surface focus:text-primary-700 active:text-primary-700 dark:active:text-primary-500 "
            href="#" @click.prevent="changePage(page)"
            :class="{ 'bg-neutral-100 dark:bg-neutral-700 text-primary-700 dark:text-primary-500': currentPage === page }">{{
              page }}</a>
        </li>
        <li>
          <a class="pagination3 text-surface focus:text-primary-700 active:text-primary-700 dark:active:text-primary-500 "
            href="#" @click.prevent="changePage(currentPage + 1)"
            :class="{ 'cursor-not-allowed opacity-50': currentPage === totalPages }">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['totalPages']),
  },
  methods: {
    ...mapActions(['setCurrentPage']),
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.setCurrentPage(page);
      }
    },
  },
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav ul {
  display: flex;
  gap: 0.5rem;
  /* Adds space between the pagination items */
}
</style>
