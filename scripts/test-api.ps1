# Test API Endpoints Script
Write-Host "`n🧪 Testing API Endpoints..." -ForegroundColor Cyan
Write-Host "=========================================`n" -ForegroundColor Cyan

# Wait for server to start
Write-Host "⏳ Waiting for dev server to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Test 1: Contact Form API
Write-Host "`n1️⃣  Testing Contact Form API" -ForegroundColor Green
Write-Host "   POST /api/contact" -ForegroundColor Gray

$contactBody = @{
    name = "Test User"
    email = "test@example.com"
    company = "Test Corporation"
    phone = "08123456789"
    topic = "Pertanyaan Umum"
    message = "Testing Turso DB migration - contact form endpoint"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/contact" `
        -Method POST `
        -ContentType "application/json" `
        -Body $contactBody

    Write-Host "   ✅ Success!" -ForegroundColor Green
    Write-Host "   Response: $($response | ConvertTo-Json)" -ForegroundColor Gray
} catch {
    Write-Host "   ❌ Failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 2: Create Gallery Item
Write-Host "`n2️⃣  Testing Gallery Create API" -ForegroundColor Green
Write-Host "   POST /api/admin/gallery" -ForegroundColor Gray

$galleryBody = @{
    image_url = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800"
    description = "Test Gallery Image - Energy Division"
    category = "energi"
    order = 1
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/admin/gallery" `
        -Method POST `
        -ContentType "application/json" `
        -Body $galleryBody

    $galleryId = $response.data.id
    Write-Host "   ✅ Success!" -ForegroundColor Green
    Write-Host "   Created ID: $galleryId" -ForegroundColor Gray
    
    # Save ID for next tests
    $global:testGalleryId = $galleryId
} catch {
    Write-Host "   ❌ Failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 3: Get All Gallery Items
Write-Host "`n3️⃣  Testing Gallery List API" -ForegroundColor Green
Write-Host "   GET /api/admin/gallery" -ForegroundColor Gray

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/admin/gallery" -Method GET
    $count = $response.data.Count
    Write-Host "   ✅ Success!" -ForegroundColor Green
    Write-Host "   Total items: $count" -ForegroundColor Gray
} catch {
    Write-Host "   ❌ Failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 4: Get Gallery by Category
Write-Host "`n4️⃣  Testing Gallery Filter API" -ForegroundColor Green
Write-Host "   GET /api/admin/gallery?category=energi" -ForegroundColor Gray

try {
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/admin/gallery?category=energi" -Method GET
    $count = $response.data.Count
    Write-Host "   ✅ Success!" -ForegroundColor Green
    Write-Host "   Items in 'energi' category: $count" -ForegroundColor Gray
} catch {
    Write-Host "   ❌ Failed: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 5: Update Gallery Item
if ($global:testGalleryId) {
    Write-Host "`n5️⃣  Testing Gallery Update API" -ForegroundColor Green
    Write-Host "   PATCH /api/admin/gallery/$($global:testGalleryId)" -ForegroundColor Gray

    $updateBody = @{
        image_url = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800"
        description = "Updated Test Gallery Image - Energy Division"
        category = "energi"
        order = 2
    } | ConvertTo-Json

    try {
        $response = Invoke-RestMethod -Uri "http://localhost:3000/api/admin/gallery/$($global:testGalleryId)" `
            -Method PATCH `
            -ContentType "application/json" `
            -Body $updateBody

        Write-Host "   ✅ Success!" -ForegroundColor Green
        Write-Host "   Updated description: $($response.data.description)" -ForegroundColor Gray
    } catch {
        Write-Host "   ❌ Failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Test 6: Get Single Gallery Item
if ($global:testGalleryId) {
    Write-Host "`n6️⃣  Testing Gallery Get Single API" -ForegroundColor Green
    Write-Host "   GET /api/admin/gallery/$($global:testGalleryId)" -ForegroundColor Gray

    try {
        $response = Invoke-RestMethod -Uri "http://localhost:3000/api/admin/gallery/$($global:testGalleryId)" -Method GET
        Write-Host "   ✅ Success!" -ForegroundColor Green
        Write-Host "   Item: $($response.data.description)" -ForegroundColor Gray
    } catch {
        Write-Host "   ❌ Failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Test 7: Delete Gallery Item
if ($global:testGalleryId) {
    Write-Host "`n7️⃣  Testing Gallery Delete API" -ForegroundColor Green
    Write-Host "   DELETE /api/admin/gallery/$($global:testGalleryId)" -ForegroundColor Gray

    try {
        $response = Invoke-RestMethod -Uri "http://localhost:3000/api/admin/gallery/$($global:testGalleryId)" -Method DELETE
        Write-Host "   ✅ Success!" -ForegroundColor Green
        Write-Host "   Response: $($response.message)" -ForegroundColor Gray
    } catch {
        Write-Host "   ❌ Failed: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Summary
Write-Host "`n=========================================`n" -ForegroundColor Cyan
Write-Host "🎉 API Testing Complete!" -ForegroundColor Green
Write-Host "`n💡 Tip: Open Drizzle Studio to see the data:" -ForegroundColor Yellow
Write-Host "   npm run db:studio" -ForegroundColor Gray
Write-Host "   Then visit: http://localhost:4983`n" -ForegroundColor Gray
