document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterBtn = document.querySelector('.filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            // In a real application, this would filter the reviews based on the selected criteria
            console.log('Filtering reviews...');
            
            const hotelFilter = document.getElementById('hotel-filter').value;
            const ratingFilter = document.getElementById('rating-filter').value;
            const statusFilter = document.getElementById('status-filter').value;
            const dateRange = document.getElementById('date-range').value;
            
            console.log('Filters applied:', {
                hotel: hotelFilter,
                rating: ratingFilter,
                status: statusFilter,
                dateRange: dateRange
            });
            
            // Simulate loading
            filterBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Applying...';
            setTimeout(() => {
                filterBtn.innerHTML = '<i class="fas fa-filter"></i> Apply Filters';
                alert('Filters applied successfully!');
            }, 1000);
        });
    }
    
    // Review action buttons
    const reviewActions = document.querySelectorAll('.review-action');
    reviewActions.forEach(action => {
        action.addEventListener('click', function() {
            const reviewItem = this.closest('.review-item');
            const reviewer = reviewItem.querySelector('.reviewer-info h4').textContent;
            const hotel = reviewItem.querySelector('.reviewer-info p').textContent;
            
            if (this.textContent.includes('Reply')) {
                console.log(`Replying to review by ${reviewer} for ${hotel}`);
                const replyText = prompt(`Enter your reply to ${reviewer}'s review:`);
                if (replyText) {
                    alert(`Reply sent to ${reviewer}`);
                }
            } else if (this.textContent.includes('Flag')) {
                console.log(`Flagging review by ${reviewer} for ${hotel}`);
                const reason = prompt('Enter reason for flagging this review:');
                if (reason) {
                    reviewItem.querySelector('.review-status').textContent = 'Flagged';
                    reviewItem.querySelector('.review-status').className = 'review-status flagged';
                    alert(`Review by ${reviewer} has been flagged.`);
                }
            } else if (this.textContent.includes('Delete')) {
                console.log(`Deleting review by ${reviewer} for ${hotel}`);
                if (confirm(`Are you sure you want to delete the review by ${reviewer}?`)) {
                    // In a real application, this would delete the review
                    reviewItem.style.opacity = '0.5';
                    setTimeout(() => {
                        reviewItem.remove();
                    }, 500);
                    alert(`Review by ${reviewer} has been deleted.`);
                }
            } else if (this.textContent.includes('Approve')) {
                console.log(`Approving review by ${reviewer} for ${hotel}`);
                reviewItem.querySelector('.review-status').textContent = 'Published';
                reviewItem.querySelector('.review-status').className = 'review-status published';
                
                // Update the action buttons
                const actionsContainer = reviewItem.querySelector('.review-actions');
                actionsContainer.innerHTML = `
                    <button class="review-action"><i class="fas fa-reply"></i> Reply</button>
                    <button class="review-action"><i class="fas fa-flag"></i> Flag</button>
                    <button class="review-action"><i class="fas fa-trash"></i> Delete</button>
                `;
                
                // Re-attach event listeners to the new buttons
                const newActions = actionsContainer.querySelectorAll('.review-action');
                newActions.forEach(newAction => {
                    newAction.addEventListener('click', arguments.callee);
                });
                
                alert(`Review by ${reviewer} has been approved and published.`);
            }
        });
    });
    
    // Pagination
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('active') && !this.classList.contains('prev') && !this.classList.contains('next')) {
                document.querySelector('.pagination-btn.active').classList.remove('active');
                this.classList.add('active');
                
                // In a real application, this would load the corresponding page
                console.log(`Loading page ${this.textContent}`);
            } else if (this.classList.contains('prev')) {
                console.log('Loading previous page');
            } else if (this.classList.contains('next')) {
                console.log('Loading next page');
            }
        });
    });
});