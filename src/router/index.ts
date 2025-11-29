import { createRouter, createWebHistory } from "vue-router";
import NexusViews from "../views/NexusViews.vue";
import HomeLanding from "../pages/Nexus/HomeLanding.vue";
import ArtDirectionNexus from "../pages/Nexus/ArtDirectionNexus.vue";
import ColorDemo from "../pages/Nexus/ColorDemo.vue";
import PrismTemplate from "../pages/Nexus/PrismTemplate.vue";
import GenerateTemplate from "../pages/Generate/GenerateTemplate.vue";
import {
  generateTemplateMap,
  listGenerateTemplates,
} from "../constants/generateTemplates";

const generateTemplates = listGenerateTemplates();
const defaultGenerateSlug = generateTemplates[0]?.slug ?? "aurora";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/nexus",
    },
    {
      path: "/nexus",
      name: "nexus",
      component: NexusViews,
      children: [
        {
          path: "",
          name: "nexus-home",
          component: HomeLanding,
        },
        {
          path: "color-demo",
          name: "color-demo",
          component: ColorDemo,
        },
        {
          path: "art-direction",
          name: "art-direction",
          component: ArtDirectionNexus,
        },
        {
          path: "prism-template",
          name: "prism-template",
          component: PrismTemplate,
        },
        {
          path: "generate",
          redirect: {
            name: "generate-template",
            params: { templateSlug: defaultGenerateSlug },
          },
        },
        {
          path: "generate/:templateSlug",
          name: "generate-template",
          component: GenerateTemplate,
          beforeEnter: (to) => {
            const slug = to.params.templateSlug as string;
            if (!generateTemplateMap[slug]) {
              return {
                name: "generate-template",
                params: { templateSlug: defaultGenerateSlug },
                query: to.query,
              };
            }
            return true;
          },
        },
      ],
    },
  ],
});

export default router;
