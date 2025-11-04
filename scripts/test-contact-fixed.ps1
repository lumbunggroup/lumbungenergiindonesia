Write-Host "`n🧪 Testing Contact Form API (with consent field)..." -ForegroundColor Cyan

$body = @{
    name = "Test User"
    email = "test@example.com"
    company = "Test Corporation"
    phone = "08123456789"
    topic = "Pertanyaan Umum"
    message = "Testing contact form with Turso DB - this is a test message"
    consent = $true
} | ConvertTo-Json

try {
    Write-Host "`nSending request to: http://localhost:3000/api/contact" -ForegroundColor Gray
    Write-Host "Body: $body`n" -ForegroundColor Gray
    
    $response = Invoke-RestMethod -Uri "http://localhost:3000/api/contact" `
        -Method POST `
        -ContentType "application/json" `
        -Body $body `
        -ErrorAction Stop

    Write-Host "✅ Success!" -ForegroundColor Green
    Write-Host "Response: $($response | ConvertTo-Json)" -ForegroundColor Gray
    
    Write-Host "`n💡 Now checking if data was saved..." -ForegroundColor Yellow
    Start-Sleep -Seconds 2
    
    # Check data
    & npx tsx scripts/check-data.ts
    
} catch {
    Write-Host "❌ Failed!" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.Exception.Response) {
        $reader = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "Response Body: $responseBody" -ForegroundColor Red
    }
}
