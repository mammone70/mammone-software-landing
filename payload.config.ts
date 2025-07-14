import { buildConfig } from "payload"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import path from "path"

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "",
  admin: {
    user: "users",
  },
  editor: slateEditor({}),
  collections: [
    {
      slug: "users",
      auth: true,
      access: {
        delete: () => false,
        update: () => false,
      },
      fields: [],
    },
    {
      slug: "services",
      admin: {
        useAsTitle: "title",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
        },
        {
          name: "icon",
          type: "select",
          required: true,
          options: [
            { label: "Globe", value: "globe" },
            { label: "Smartphone", value: "smartphone" },
            { label: "Database", value: "database" },
            { label: "Zap", value: "zap" },
          ],
        },
        {
          name: "order",
          type: "number",
          defaultValue: 0,
        },
      ],
    },
    {
      slug: "testimonials",
      admin: {
        useAsTitle: "name",
      },
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "company",
          type: "text",
          required: true,
        },
        {
          name: "content",
          type: "textarea",
          required: true,
        },
        {
          name: "order",
          type: "number",
          defaultValue: 0,
        },
      ],
    },
    {
      slug: "hero-content",
      admin: {
        useAsTitle: "title",
      },
      fields: [
        {
          name: "badge",
          type: "text",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "subtitle",
          type: "textarea",
          required: true,
        },
        {
          name: "inputPlaceholder",
          type: "text",
          required: true,
        },
        {
          name: "ctaText",
          type: "text",
          required: true,
        },
        {
          name: "features",
          type: "array",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "profileImage",
          type: "upload",
          relationTo: "media",
          required: false,
        },
        {
          name: "profileAlt",
          type: "text",
          defaultValue: "Professional headshot of Mammone Software founder",
        },
        {
          name: "introText",
          type: "text",
          defaultValue: "Hi, I'm the founder of Mammone Software",
        },
        {
          name: "statusText",
          type: "text",
          defaultValue: "Ready to bring your vision to life",
        },
      ],
    },
    {
      slug: "site-settings",
      admin: {
        useAsTitle: "siteName",
      },
      fields: [
        {
          name: "siteName",
          type: "text",
          required: true,
        },
        {
          name: "tagline",
          type: "text",
          required: true,
        },
        {
          name: "email",
          type: "email",
          required: true,
        },
        {
          name: "phone",
          type: "text",
          required: true,
        },
        {
          name: "socialLinks",
          type: "group",
          fields: [
            {
              name: "github",
              type: "text",
            },
            {
              name: "linkedin",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      slug: "media",
      upload: {
        staticDir: "media",
        imageSizes: [
          {
            name: "thumbnail",
            width: 400,
            height: 300,
            position: "centre",
          },
          {
            name: "card",
            width: 768,
            height: 1024,
            position: "centre",
          },
        ],
        adminThumbnail: "thumbnail",
        mimeTypes: ["image/*"],
      },
      fields: [
        {
          name: "alt",
          type: "text",
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "mongodb://localhost:27017/mammone-software",
  }),
})
