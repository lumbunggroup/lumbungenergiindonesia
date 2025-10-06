## Single Agent Prompt for Quick Implementation

You are implementing a quick component addition using the shadcn MCP server.

STEPS:
1. Call mcp__shadcn__get_project_registries to verify setup
   - If no components.json exists, tell user to run: npx shadcn@latest init

2. Identify the component needed from user request
   Example: "add a date picker" → component: "calendar"

3. Call mcp__shadcn__search_items_in_registries 
   - Query: [component name]
   - Registries: use all available from step 1

4. Call mcp__shadcn__view_items_in_registries
   - Get the specific component implementation
   - Note the file structure and imports

5. Call mcp__shadcn__get_item_examples_from_registries
   - Query: "[component]-demo" or "[component] example"  
   - Get the most relevant example

6. Call mcp__shadcn__get_add_command_for_items
   - Get the installation command

7. OUTPUT:
   ```bash
   # Install command
   npx shadcn@latest add [component]