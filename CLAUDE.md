# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the JPCafe project documentation repository containing HTML prototype pages for a Japanese cafe management system. The system includes user account management, wallet management, and user tag management features.

## Project Structure

```
jpcafe-project-docs/
├── README.md                          # GitLab template README
├── JPCafe Menu/
│   └── account/
│       ├── account_wallet.html        # Account wallet management system
│       └── user_tag_management.html   # User tag management system
└── CLAUDE.md                          # This file
```

## Architecture Overview

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Language**: Traditional Chinese (Traditional Chinese interface)
- **Styling**: Custom CSS with modern design patterns
- **Currency**: Japanese Yen (JPY) as primary currency

### Key System Components

1. **Account Wallet Management** (`account_wallet.html`)
   - User wallet balance tracking and management
   - Multi-currency support (JPY, CNY, BRL)
   - System credit/debit operations
   - Search and filtering capabilities
   - Pagination and data display

2. **User Tag Management** (`user_tag_management.html`)
   - User categorization system
   - Color-coded tag system with 8 predefined colors
   - Tag creation, modification, and deletion
   - Search functionality
   - System rules for user classification

### Common UI Patterns

Both pages share a consistent design system:

- **Sidebar Navigation**: Collapsible menu with hierarchical structure
- **Top Navigation**: Fixed header with user info and breadcrumbs
- **Tab System**: Closeable breadcrumb-style tabs
- **Modal Dialogs**: For data entry and confirmations
- **Search Interface**: Unified search components with reset functionality
- **Data Tables**: Sortable tables with pagination
- **Notification System**: Toast-style success/error messages

### Key Features

1. **Responsive Sidebar**: Toggle-able sidebar that adapts main content area
2. **Multi-level Menu**: Expandable/collapsible menu system with active states
3. **Modal Management**: Centralized modal system for forms and confirmations
4. **Search & Filter**: Live search with result highlighting and reset
5. **Form Validation**: Client-side validation with user feedback
6. **Animation System**: Smooth transitions and micro-interactions

## Development Patterns

### CSS Architecture
- Component-based styling with clear separation of concerns
- Consistent color scheme using CSS custom properties
- Responsive design with mobile-first approach
- Transition animations for better UX

### JavaScript Structure
- Event-driven architecture with DOM-ready initialization
- Modular function organization
- Consistent error handling and user feedback
- Local state management for UI interactions

### Data Management
- Mock data embedded in HTML for prototype purposes
- Consistent data structures across components
- Client-side filtering and sorting capabilities

## System Rules & Business Logic

### Wallet Management
- Automatic wallet creation for each currency on user registration
- Real-time balance updates with color-coded display (grey for zero, green for positive)
- System operations require admin confirmation
- All transactions logged with timestamps

### User Tag System
- Default user progression: "New User" (7 days) → "General User"
- System-protected tags (ID: 001, 002) cannot be modified
- Custom tags support 8 predefined colors
- Tag deletion automatically reassigns users to "General User" status
- ID format: 3-digit numbers (001-999)

## File Conventions

### HTML Structure
- Semantic HTML5 elements
- Consistent class naming with BEM-like methodology
- Inline styles for dynamic content (colors, states)
- Script tags at bottom for performance

### CSS Organization
- Grouped by component/section
- Mobile-responsive design patterns
- Consistent spacing and typography scales
- Color variables for theme consistency

### JavaScript Patterns
- Global function declarations for event handlers
- Module pattern for feature organization
- Consistent error handling and user feedback
- Event delegation for dynamic content

## Development Templates

### Under Development Page Template
When creating new pages that are not yet implemented, use the following standardized template:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Page Number].[Page Name]</title>
    <style>
        body {
            font-family: "Open Sans", "Noto Sans SC", "Noto Sans TC", sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
            color: #333;
        }
        .page-header {
            background: white;
            padding: 20px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .page-title {
            font-size: 24px;
            font-weight: 600;
            color: #2c3e50;
            margin: 0;
        }
        .content-area {
            background: white;
            padding: 30px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
        }
        .todo-message {
            font-size: 18px;
            color: #7f8c8d;
            margin-bottom: 10px;
        }
        .page-path {
            font-size: 14px;
            color: #95a5a6;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="page-header">
        <h1 class="page-title">[Page Number].[Page Name]</h1>
    </div>
    
    <div class="content-area">
        <div class="todo-message">此頁面功能開發中...</div>
        <div class="page-path">路徑：JPCafe Menu/JPCafe/[Page Number].[Page Name]/</div>
    </div>
</body>
</html>
```

**Template Usage Guidelines:**
- Replace `[Page Number].[Page Name]` with the actual page identifier (e.g., "3.用户标签")
- Use simplified Chinese for all text content
- Maintain consistent styling with existing pages
- Keep the development message standardized: "此頁面功能開發中..."
- Include the page path information for navigation reference

**Examples:**
- File: `3.用户标签/用户标签.html` → Title: "3.用户标签"
- File: `5.系统设置/系统设置.html` → Title: "5.系统设置"

### New Page Creation SOP (Standard Operating Procedure)

When adding new pages to the system, follow these steps:

1. **Create Directory Structure**
   - Create the appropriate folder hierarchy under `JPCafeMenu/`
   - Follow the naming convention: `[Number].[Chinese Name]/`

2. **Create HTML File**
   - Use the "Under Development Page Template" above
   - Name the file with the same Chinese name as the folder
   - Replace template placeholders with actual page information

3. **Update system.html Navigation**
   - Open `JPCafeMenu/system.html`
   - Locate the `menuStructure` JavaScript object
   - Add the new page entry to the appropriate category:
   ```javascript
   "1.账户管理": {
       "1.个人账户": "1.账户管理/1.个人账户/个人账户.html",
       "2.账户钱包": "1.账户管理/2.账户钱包/账户钱包.html",
       "3.新增页面": "1.账户管理/3.新增页面/新增页面.html"  // Add new entry here
   },
   ```

4. **Test Navigation**
   - Open `system.html` in browser
   - Verify the new menu item appears in the correct category
   - Click to ensure it loads the new page correctly

This template ensures all placeholder pages have a consistent look and feel while clearly indicating their development status, and are properly integrated into the navigation system.
