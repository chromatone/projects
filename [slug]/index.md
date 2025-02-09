---
dynamic: true
title: Projects
---

<script setup>
import { useData } from 'vitepress'
const { params } = useData()

import { defineClientComponent } from 'vitepress'
const ProjectEvents = defineClientComponent(() => import('../ProjectEvents.vue'))

import ProjectPage from '../ProjectPage.vue'
</script>

<ProjectPage />

<!-- @content -->

<ProjectEvents :id="$params?.id"></ProjectEvents>
